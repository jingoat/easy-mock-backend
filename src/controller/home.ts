import { Controller, Get, Post, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import path = require('path');
import fs = require('fs');

const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/')
  async home() {
    return 'Hello Midwayjs!';
  }

  @Post('/createApiTest')
  async createApiTest(ctx: Context): Promise<any> {
    console.info('path----------', ctx.request.body);
    const stream = await ctx.getFileStream();
    const fileName = 'test5';
    const target = path.join('src/lambda', fileName);
    const writeStream = fs.createWriteStream(target);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      await sendToWormhole(stream);
      throw err;
    }
    return { success: true, message: 'OK', data: ctx.request.body };
  }
}

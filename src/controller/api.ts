import { Inject, Controller, Post, Provide, Get } from '@midwayjs/decorator';
import { Context } from 'egg';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Post('/mock/:level1')
  async createLevel1Api(ctx: Context): Promise<any> {
    console.info('ctx.params----------', ctx.params);
    console.info('ctx.request.body----------', ctx.request.body);
    return { success: true, message: 'OK', data: ctx.params };
  }
  @Post('/mock/:level1/:level2')
  async createLevel2Api(ctx: Context): Promise<any> {
    console.info('ctx.params----------', ctx.params);
    console.info('ctx.request.body----------', ctx.request.body);
    return { success: true, message: 'OK', data: ctx.params };
  }
  @Post('/mock/:level1/:level2/:level3')
  async createLevel3Api(ctx: Context): Promise<any> {
    console.info('ctx.params----------', ctx.params);
    console.info('ctx.request.body----------', ctx.request.body);
    return { success: true, message: 'OK', data: ctx.params };
  }
  @Get('/mock/:level1')
  async getLevel1Api(ctx: Context): Promise<any> {
    console.info('ctx.params----------', ctx.params);
    return { success: true, message: 'OK', data: ctx.params };
  }
  @Get('/mock/:level1/:level2')
  async getLevel2Api(ctx: Context): Promise<any> {
    console.info('ctx.params----------', ctx.params);
    return { success: true, message: 'OK', data: ctx.params };
  }
  @Get('/mock/:level1/:level2/:level3')
  async getLevel3Api(ctx: Context): Promise<any> {
    console.info('ctx.params----------', ctx.params);
    return { success: true, message: 'OK', data: ctx.params };
  }
}

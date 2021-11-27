import { Inject, Controller, Post, Provide, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { MockDataService } from '../service/mockData';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  mockDataService: MockDataService;

  @Post('/mock/:level1')
  async createLevel1Api(ctx: Context): Promise<any> {
    const ctxParams = ctx.params;
    const ctxReqBody = ctx.request.body;
    console.info('ctxParams------------', ctxParams);
    console.info('ctxReqBody------------', ctxReqBody);
    await this.mockDataService.saveMockData(
      ctxParams?.level1,
      ctxParams?.level2,
      ctxParams?.level3,
      ctxParams?.level4,
      ctxParams?.level5,
      ctxParams?.level6,
      ctxReqBody?.mockData
    );
    return { success: true, message: 'OK' };
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
  @Post('/mock/:level1/:level2/:level3/:level4')
  async createLevel4Api(ctx: Context): Promise<any> {
    console.info('ctx.params----------', ctx.params);
    console.info('ctx.request.body----------', ctx.request.body);
    return { success: true, message: 'OK', data: ctx.params };
  }
  @Get('/mock/:level1')
  async getLevel1Api(ctx: Context): Promise<any> {
    const ctxParams = ctx.params;
    console.info('ctxParams------level1-----', ctxParams);
    const mockDataRes = await this.mockDataService.findMockData(
      ctxParams?.level1
    );
    return {
      success: true,
      message: 'OK',
      data: JSON.parse(mockDataRes.res_data),
    };
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
  @Get('/mock/:level1/:level2/:level4')
  async getLevel4Api(ctx: Context): Promise<any> {
    console.info('ctx.params----------', ctx.params);
    return { success: true, message: 'OK', data: ctx.params };
  }
}

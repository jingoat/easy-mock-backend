import {
  Inject,
  Controller,
  Post,
  Provide,
  Get,
  Put,
  Del,
} from '@midwayjs/decorator';
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
    // console.info('ctxParams------------', ctxParams);
    // console.info('ctxReqBody------------', ctxReqBody);
    const mockDataRes = await this.mockDataService.findMockData(
      ctxParams?.level1
    );
    if (mockDataRes && mockDataRes?.res_data) {
      return { success: false, message: '您创建的接口已存在', code: 1 };
    }
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
  @Put('/mock/:id')
  async updateLevel1Api(ctx: Context): Promise<any> {
    const ctxParams = ctx.params;
    const ctxReqBody = ctx.request.body;
    console.info('ctxParams------------', ctxParams);
    console.info('ctxReqBody------------', ctxReqBody);
    await this.mockDataService.updateMockData(
      ctxParams?.id,
      ctxReqBody?.mockData
    );
    return { success: true, message: '更新成功' };
  }
  @Del('/mock/:id')
  async deleteLevel1Api(ctx: Context): Promise<any> {
    const ctxParams = ctx.params;
    const ctxReqBody = ctx.request.body;
    console.info('ctxParams------------', ctxParams);
    console.info('ctxReqBody------------', ctxReqBody);
    const mockDataRes = await this.mockDataService.findMockDataById(
      ctxParams?.id
    );
    if (!mockDataRes || !mockDataRes?.res_data) {
      return { success: false, message: '接口不存在', code: 1 };
    }
    await this.mockDataService.deleteMockData(ctxParams?.id);
    return { success: true, message: '删除成功' };
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
    // console.info('ctxParams------level1-----', ctxParams);
    const mockDataRes = await this.mockDataService.findMockData(
      ctxParams?.level1
    );
    const noData = '{}';
    return {
      success: true,
      message: 'OK',
      data: JSON.parse(mockDataRes?.res_data || noData),
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

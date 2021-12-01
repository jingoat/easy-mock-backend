import {
  Inject,
  Controller,
  Post,
  Provide,
  Put,
  Del,
  All,
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

  @Post('/add/:level1')
  async createLevel1Api(ctx: Context): Promise<any> {
    const ctxParams = ctx.params;
    const ctxReqBody = ctx.request.body;
    // console.info('ctxParams------------', ctxParams);
    // console.info('ctxReqBody------------', ctxReqBody);
    const mockDataRes = await this.mockDataService.findMockData1(
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
    return { success: true, message: 'OK', code: 0 };
  }
  @Post('/add/:level1/:level2')
  async createLevel2Api(ctx: Context): Promise<any> {
    const ctxParams = ctx.params;
    const ctxReqBody = ctx.request.body;
    console.info('ctx.params----------', ctxParams);
    console.info('ctx.request.body----------', ctx.request.body);
    const mockDataRes = await this.mockDataService.findMockData2(
      ctxParams?.level1,
      ctxParams?.level2
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
    return { success: true, message: 'OK', code: 0 };
  }
  @Post('/add/:level1/:level2/:level3')
  async createLevel3Api(ctx: Context): Promise<any> {
    const ctxParams = ctx.params;
    const ctxReqBody = ctx.request.body;
    console.info('ctx.params----------', ctxParams);
    console.info('ctx.request.body----------', ctx.request.body);
    const mockDataRes = await this.mockDataService.findMockData3(
      ctxParams?.level1,
      ctxParams?.level2,
      ctxParams?.level3
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
    return { success: true, message: 'OK', code: 0 };
  }
  @Post('/add/:level1/:level2/:level3/:level4')
  async createLevel4Api(ctx: Context): Promise<any> {
    const ctxParams = ctx.params;
    const ctxReqBody = ctx.request.body;
    console.info('ctx.params----------', ctxParams);
    console.info('ctx.request.body----------', ctx.request.body);
    const mockDataRes = await this.mockDataService.findMockData4(
      ctxParams?.level1,
      ctxParams?.level2,
      ctxParams?.level3,
      ctxParams?.level4
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
    return { success: true, message: 'OK', code: 0 };
  }
  @All('/mock/:level1')
  async getLevel1Api(ctx: Context): Promise<any> {
    const ctxParams = ctx.params;
    // console.info('ctxParams------level1-----', ctxParams);
    const mockDataRes = await this.mockDataService.findMockData1(
      ctxParams?.level1
    );
    if (!mockDataRes) {
      return {
        success: true,
        message: 'OK',
        code: 1,
        data: '接口不存在',
      };
    }
    return {
      success: true,
      message: 'OK',
      data: JSON.parse(mockDataRes?.res_data),
    };
  }
  @All('/mock/:level1/:level2')
  async getLevel2Api(ctx: Context): Promise<any> {
    const ctxParams = ctx.params;
    // console.info('ctxParams------level1-----', ctxParams);
    const mockDataRes = await this.mockDataService.findMockData2(
      ctxParams?.level1,
      ctxParams?.level2
    );
    if (!mockDataRes) {
      return {
        success: true,
        message: 'OK',
        code: 1,
        data: '接口不存在',
      };
    }
    return {
      success: true,
      message: 'OK',
      data: JSON.parse(mockDataRes?.res_data),
    };
  }
  @All('/mock/:level1/:level2/:level3')
  async getLevel3Api(ctx: Context): Promise<any> {
    const ctxParams = ctx.params;
    // console.info('ctxParams------level1-----', ctxParams);
    const mockDataRes = await this.mockDataService.findMockData3(
      ctxParams?.level1,
      ctxParams?.level2,
      ctxParams?.level3
    );
    if (!mockDataRes) {
      return {
        success: true,
        message: 'OK',
        code: 1,
        data: '接口不存在',
      };
    }
    return {
      success: true,
      message: 'OK',
      data: JSON.parse(mockDataRes?.res_data),
    };
  }
  @All('/mock/:level1/:level2/:level3/:level4')
  async getLevel4Api(ctx: Context): Promise<any> {
    const ctxParams = ctx.params;
    // console.info('ctxParams------level1-----', ctxParams);
    const mockDataRes = await this.mockDataService.findMockData4(
      ctxParams?.level1,
      ctxParams?.level2,
      ctxParams?.level3,
      ctxParams?.level4
    );
    if (!mockDataRes) {
      return {
        success: true,
        message: 'OK',
        code: 1,
        data: '接口不存在',
      };
    }
    return {
      success: true,
      message: 'OK',
      data: JSON.parse(mockDataRes?.res_data),
    };
  }
  @Put('/update/:id')
  async updateLevel1Api(ctx: Context): Promise<any> {
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
    await this.mockDataService.updateMockData(
      ctxParams?.id,
      ctxReqBody?.mockData
    );
    return { success: true, message: '更新成功', code: 0 };
  }
  @Del('/delete/:id')
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
    return { success: true, message: '删除成功', code: 0 };
  }
}

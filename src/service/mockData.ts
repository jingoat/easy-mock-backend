import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { MockData } from '../entity/mockData';
import { Repository } from 'typeorm';

@Provide()
export class MockDataService {
  @InjectEntityModel(MockData)
  mockDataModel: Repository<MockData>;

  // save
  async saveMockData() {
    // create a entity object
    let mockData = new MockData();
    mockData.level1 = 'test1';

    // save entity
    const mockDataResult = await this.mockDataModel.save(mockData);

    // save success
    console.log('mockData id = ', mockDataResult.id);
  }
}

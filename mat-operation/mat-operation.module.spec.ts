import { MatOperationModule } from './mat-operation.module';

describe('MatOperationModule', () => {
  let matOperationModule: MatOperationModule;

  beforeEach(() => {
    matOperationModule = new MatOperationModule();
  });

  it('should create an instance', () => {
    expect(matOperationModule).toBeTruthy();
  });
});

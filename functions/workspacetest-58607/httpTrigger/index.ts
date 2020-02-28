import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { body } from './lib';

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.res = {
    body,
    status: 200
  };
};

export default httpTrigger;

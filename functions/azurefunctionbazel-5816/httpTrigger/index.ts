import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
        context.res = {
            body: "Hello Bazel"
        };
};

export default httpTrigger;

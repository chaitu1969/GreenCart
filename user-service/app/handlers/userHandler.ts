import { UserService } from "app/service/userService";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { ErrorResponse } from "app/utility/response";
import middy from "@middy/core";
import bodyparser from "@middy/http-json-body-parser";
import { container } from "tsyringe";

const service = container.resolve(UserService);

export const Signup = middy()
  .use(bodyparser({ disableContentTypeError: false }))
  .handler((event: APIGatewayProxyEventV2) => {
    return service.CreateUser(event);
  });

export const Login = async (event: APIGatewayProxyEventV2) => {
  return service.UserLogin(event);
};

export const Verify = async (event: APIGatewayProxyEventV2) => {
  return service.VerifyUser(event);
};

export const Profile = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase();

  if (httpMethod === "post") {
    return service.Createprofile(event);
  }

  if (httpMethod === "put") {
    return service.EditProfile(event);
  }

  if (httpMethod === "get") {
    return service.GetProfile(event);
  }

  return ErrorResponse(404, "Requred method is not supported");
};

export const Cart = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase();

  if (httpMethod === "post") {
    return service.CreateCart(event);
  }

  if (httpMethod === "put") {
    return service.UpdateCart(event);
  }

  if (httpMethod === "get") {
    return service.GetCart(event);
  }

  return ErrorResponse(404, "Requred method is not supported");
};

export const Payment = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase();

  if (httpMethod === "post") {
    return service.CreatePaymentMethod(event);
  }

  if (httpMethod === "put") {
    return service.UpdatePaymentMethod(event);
  }

  if (httpMethod === "get") {
    return service.GetPaymentMethod(event);
  }

  return ErrorResponse(404, "Requred method is not supported");
};

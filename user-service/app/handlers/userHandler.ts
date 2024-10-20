import { UserService } from "app/service/userService";
import { APIGatewayProxyEventV2 } from "aws-lambda";

const service = new UserService();

export const Signup = async (event: APIGatewayProxyEventV2) => {
  console.log(event);

  return service.CreateUser(event);
};

export const Login = async (event: APIGatewayProxyEventV2) => {
  return service.UserLogin(event);
};

export const Verify = async (event: APIGatewayProxyEventV2) => {
  return service.VerifyUser(event);
};

export const Profile = async (event: APIGatewayProxyEventV2) => {
  return service.Createprofile(event);
};

export const Cart = async (event: APIGatewayProxyEventV2) => {
  console.log(event);

  return {
    statusCode: 200,
    headers: {
      "Access-Controll-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "Response from Cart",
      data: {},
    }),
  };
};

export const Payment = async (event: APIGatewayProxyEventV2) => {
  console.log(event);

  return {
    statusCode: 200,
    headers: {
      "Access-Controll-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "Response from Payment",
      data: {},
    }),
  };
};

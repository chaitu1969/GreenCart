import { successResponse } from "app/utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserRepository } from "app/repository/userRepository";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class UserService {
  private repository: UserRepository;
  constructor() {
    this.repository = new UserRepository();
  }

  // user creation, Validation & logic

  async CreateUser(event: APIGatewayProxyEventV2) {
    const body = event.body;

    console.log(body);

    await this.repository.CreateUserOperation();

    return successResponse({ message: "response from create user" });
  }

  async UserLogin(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "user succesfully login" });
  }

  async VerifyUser(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "user succesfully Verified" });
  }

  // User profile

  async Createprofile(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "userProfile succesfully created" });
  }

  async GetProfile(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "userProfile succesfully fetched" });
  }

  async EditProfile(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "userProfile succesfully Updated" });
  }

  // Cart section

  async CreateCart(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "Cart succesfully created" });
  }

  async GetCart(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "Cart succesfully fetched" });
  }

  async UpdateCart(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "Cart succesfully updated" });
  }

  // Payment section

  async CreatePaymentMethod(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "Payment succesfully created" });
  }

  async UpdatePaymentMethod(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "Payment succesfully updated" });
  }

  async GetPaymentMethod(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "Payment succesfully fetched" });
  }
}

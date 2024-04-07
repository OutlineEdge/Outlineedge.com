import { prisma } from "./prisma";


type FormInput = {
  email: string;
  fullname: string;
};

export async function createSubscribe(formInput: FormInput) {
  try {
    const subscribe = await prisma.subscribe.create({
      data: {
        email: formInput.email,
        fullname: formInput.fullname,
      },
    });
    return subscribe;
  } catch (error) {
    console.log("Error occurred while creating subscribe  -> ", error);
    return { error };
  }
}

export async function getAllSubscriptions() {
  try {
    const subscriptions = await prisma.subscribe.findMany();
    return { subscriptions };
  } catch (error) {
    console.log("Error occurred while fetching all subscriptions -> ", error);
    return { error };
  }
}

export async function deleteSubscriptionById(id: string) {
  try {
    const subscribe = await prisma.subscribe.delete({ where: { id } });
    return { subscribe };
  } catch (error) {
    return { error };
  }
}

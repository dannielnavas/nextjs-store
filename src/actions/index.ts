"use server";
import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";

// corre en el servidor

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject.password_confirmation;
  const graphqlCliente = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    input: {
      ...formDataObject,
      phone: "+57" + formDataObject.phone,
      acceptsMarketing: true,
    },
  };
  const data = await graphqlCliente.request(createUserMutation, variables);
  console.log(data);
};

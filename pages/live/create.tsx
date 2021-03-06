import { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const Create:NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
    <form className="space-y-4 py-10 px-4">
      <Input required label="Name" name="name" />
      <Input 
        required
        label="Price"
        name="price"
        kind="price"
      />
      <TextArea name="description" label="Description" />
      <Button text="Go Live" large/>
    </form>
    </Layout>
  );
}

export default Create;
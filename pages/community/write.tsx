import { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="질문하기">
      <form className="flex flex-col mt-8 p-4 space-y-4">
        <TextArea label="질문하기" required placeholder="Ask a question!"/>
        <Button text="Submit" />
      </form>
    </Layout>
  );
}

export default Write;
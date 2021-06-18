import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const { TextArea } = Input;

function PageContact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { required: true, message: "Please input your Full Name!" },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="Email Address"
            rules={[
              { required: true, message: "Please input your Email Address!" },
            ]}
          >
            <Input type="email" placeholder="Email Address" />
          </Form.Item>

          <Form.Item name="Subject">
            <Input placeholder="Subject" />
          </Form.Item>

          <Form.Item name="Message">
            <TextArea placeholder="Message" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default PageContact;

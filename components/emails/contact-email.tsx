import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface Props {
  firstname: string;
  lastname: string;
  company_name: string;
  phone_number: string;
  message: string;
  email: string;
  service: string;
}

export const ContactEmail = ({
  firstname,
  lastname,
  company_name,
  phone_number,
  message,
  email,
  service,
}: Props) => {
  return (
    <Html>
      <Head />
      <Preview>You updated the password for your Twitch account</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img
              width={114}
              src={`https://xfosoftcore.atlassian.net/s/-orl6br/b/5/0154da56d8de108aa7a1586254671edd/_/jira-logo-scaled.png`}
            />
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Section>
              <Row>
                <Column align="left" style={iconStyle}>
                  <Img
                    className="rounded-full"
                    src={`https://cdn-icons-png.flaticon.com/128/1514/1514415.png`}
                    width="40"
                    height="40"
                  />
                </Column>
                <Column align="left" style={{ width: "85px" }}>
                  <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {" "}
                    Service :{" "}
                  </Text>
                </Column>
                <Column align="left">
                  <Text style={{ fontSize: "20px" }}>{service}</Text>
                </Column>
              </Row>
            </Section>
            <Text style={paragraph}>{message}</Text>
            <Text style={paragraph}>
              Thanks,
              <br />
              {firstname} {lastname}
            </Text>
            <Section style={{ marginTop: "-25px" }}>
              <Row>
                <Column align="left" style={iconStyle}>
                  <Img
                    className="rounded-full"
                    src={`https://cdn-icons-png.flaticon.com/128/3059/3059486.png`}
                    width="14"
                    height="14"
                  />
                </Column>
                <Column align="left" style={colonStyle}>
                  <Text>Email : </Text>
                </Column>
                <Column align="left">
                  <code>{email}</code>
                </Column>
              </Row>
            </Section>
            <Section style={{ marginTop: "-25px" }}>
              <Row>
                <Column align="left" style={iconStyle}>
                  <Img
                    className="rounded-full"
                    src={`https://cdn-icons-png.flaticon.com/128/455/455705.png`}
                    width="14"
                    height="14"
                  />
                </Column>
                <Column align="left" style={colonStyle}>
                  <Text> Phone : </Text>
                </Column>
                <Column align="left">
                  <code>{phone_number}</code>
                </Column>
              </Row>
            </Section>
            <Section style={{ marginTop: "-25px" }}>
              <Row>
                <Column align="left" style={iconStyle}>
                  <Img
                    className="rounded-full"
                    src={`https://cdn-icons-png.flaticon.com/128/9631/9631111.png`}
                    width="14"
                    height="14"
                  />
                </Column>
                <Column align="left" style={colonStyle}>
                  <Text> Company : </Text>
                </Column>
                <Column align="left">
                  <code>{company_name}</code>
                </Column>
              </Row>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  width: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  width: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 50px 10px 60px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid rgb(145,71,255)",
  width: "102px",
};

const link = {
  textDecoration: "underline",
};

const iconStyle = {
  width: "18px",
};
const colonStyle = {
  width: "75px",
};

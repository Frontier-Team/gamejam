import styled from "@emotion/styled";
import {
  Content,
  Highlight,
  Paragraph,
  Section,
  SubTitle,
  Title,
} from "./RulesPage.styled";

export const RulesPage: React.FC = () => {
  return (
    <Content>
      <Section>
        <Title>Code of Conduct</Title>
        <Paragraph>
          At Reboot we aim to provide a friendly and supportive environment for
          colleagues. Please follow this Code of Conduct to ensure everyone gets
          the most from the day. If you see or experience inappropriate
          behaviour, ask respectfully for it to stop.
        </Paragraph>

        <SubTitle>What we ask of you</SubTitle>
        <Paragraph>
          <Highlight>Engage -</Highlight> Be in the room and take part in
          activities. We kindly request that you do not log on to Teams calls
          through the day.
        </Paragraph>
        <Paragraph>
          <Highlight>Share -</Highlight> Take what you learn from the event and
          share it with your team.
        </Paragraph>
        <SubTitle>Live our group values</SubTitle>
        <Paragraph>
          <Highlight>Inclusive -</Highlight> Be inclusive in your actions and
          language. Help us make the event something for everyone to benefit
          from.
        </Paragraph>
        <Paragraph>
          <Highlight>Sustainable -</Highlight> Don't throw away reusable
          giveaway items - if you don't need or want it, don't accept it.
        </Paragraph>
        <Paragraph>
          <Highlight>Trust -</Highlight> Assume people are working in our best
          interests and trust them in their endeavours.
        </Paragraph>
        <Paragraph>
          <Highlight>Bold -</Highlight> Be prepared to meet new people, learn
          new things and experiment with technology.
        </Paragraph>
        <Paragraph>
          <Highlight>People first -</Highlight> Treat each other with respect
          and go the extra mile to support each other.
        </Paragraph>
      </Section>

      <Section>
        <Title>Accessibility - Supporting Information</Title>
        <Paragraph>
          As per our code of conduct, please be inclusive in your actions by
          putting people-first:
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              If an attendee is wearing a yellow sunflower lanyard, be aware
              this may be the sign of a hidden disability.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              If you need any more information, see our{" "}
              <a href="#briefing-pack">Inclusive Briefing Pack</a>, available at
              reception.
            </Paragraph>
          </li>
        </ul>

        <SubTitle>Quiet Space</SubTitle>
        <Paragraph>Upper Level - Exchange 6</Paragraph>
      </Section>

      <Section id="briefing-pack">
        <Title>Dundee Game Jam Inclusive Briefing Pack</Title>
        <Paragraph>
          We have prepared a Dundee Game Jam Inclusive Briefing Pack which
          describes what you will experience at the event and includes
          accessibility information. A copy is stored on the Dundee Game Jam
          event SharePoint site and some printed copies are available at the
          event reception.
        </Paragraph>
      </Section>
    </Content>
  );
};

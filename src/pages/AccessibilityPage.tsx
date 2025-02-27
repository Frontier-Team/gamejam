import { CenteredParagraph, Heading, PageContainer, Paragraph } from '../styles/sharedStyles';

export const AccessibilityPage = () => {
  return (
    <PageContainer>
      <Heading>
        V&A Museum Accessibility
      </Heading>
      <CenteredParagraph>
        1 Riverside Esplanade, Dundee, DD1 4EZ, Scotland
      </CenteredParagraph>

      <h2>Parking</h2>
      <Paragraph>
        There are disabled parking bays outside the museum where blue badge holders
        can park free of charge and without time limit. Parking is available from several
        Dundee City Council car parks nearby.
      </Paragraph>

      <h2>Lanyards</h2>
      <Paragraph>
        At registration, Game Jam support staff will provide you with a lanyard for the day. This will include a QR code that will provide information
        on the event.
        <Paragraph>If you would prefer to wear your yellow sunflower lanyard, please bring this with you.
          All our staff are aware of the significance of the sunflower lanyard.
        </Paragraph>
        We will also have red lanyards available for those who do not wish to be photographed. Please ask a member of the registration team and one will be issues to you.
      </Paragraph>

      <h2>Assistance dogs</h2>
      <Paragraph>
        You are welcome to bring guide dogs and other recognised assistance dogs into the museum.
        Drinking bowls are available from our information desk.
      </Paragraph>

      <h2>Wheelchairs for hire</h2>
      <Paragraph>
        A limited number of wheelchairs are available for you to loan free of charge
        by emailing in advance. On arrival, you can collect wheelchairs at the Information
        Desk. Small mobility scooters are welcome inside the museum.
      </Paragraph>

      <h2>Lifts</h2>
      <Paragraph>
        Lifts are available to all floors and there is wheelchair access to all spaces.
      </Paragraph>

      <h2>Alternative access</h2>
      <Paragraph>
        For groups and individuals with limited mobility, alternative access can be arranged
        via the staff entrance of V&A Dundee (directly opposite the parking on South Crichton
        Street). Please ask a member of our security team there who will arrange a member of staff
        to escort you into the museum.
      </Paragraph>

      <h2>Toilets</h2>
      <Paragraph>
        Accessible toilets are available on all floors and there is a Changing Places toilet on
        level 1.
      </Paragraph>

      <h2>Quiet room</h2>
      <Paragraph>
        A quiet room is available if you need time away from the hustle and bustle of
        the museum.
      </Paragraph>

      <h2>Seating</h2>
      <Paragraph>
        There is a range of seating provided around the museum and the grounds. We also have
        portable stools available for you to borrow in the gallery spaces.
      </Paragraph>
    </PageContainer>
  );
};

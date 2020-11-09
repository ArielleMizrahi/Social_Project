import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import InfoCardMap from '../commTable/infoCardMap';

function CommTable(props) {
  const PplArr = {
    card: [
      {
        index: 1,
        name: 'ישראל ישראלי',
        position: 'יו״ר וועדה',
        phone: '054222222',
        mail: 'gas@gfdv.com',
      },
      {
        index: 2,
        name: 'ילוני אלמוני',
        position: 'יו״ר וועדהגן יו"ר הוועדה',
        phone: '054222222',
        mail: 'HHHH@MMm.com',
      },
      {
        index: 3,
        name: 'גודי גודיד',
        position: 'מזכירת היו״ר',
        phone: '054222222',
        mail: 'cofi@xmxm.com',
      },
    ],
  };

  const PplArrMap = PplArr.card.map((card) => (
    <InfoCardMap card={card} key={card.name.toString} />
  ));
  return (
    <Fragment>
      <Card className="text-right h-auto w-100">
        <Card.Header as="h5" dir="rtl">
          חברי הוועדה:
        </Card.Header>
        <Card.Body>
          <Card.Title>להלן טבלה עם פרטי חברי הוועדה:</Card.Title>
          <Card.Text>
            <Table responsive="sm" dir="rtl">
              <thead>
                <tr>
                  <th>#</th>
                  <th>שם:</th>
                  <th>תפקיד:</th>
                  <th>טלפון:</th>
                  <th>E-mail:</th>
                </tr>
              </thead>
              <tbody>{PplArrMap}</tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default CommTable;

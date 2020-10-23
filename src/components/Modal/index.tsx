import React, {useState} from 'react';
import {View, Modal, Text} from 'react-native';

import {Container, ModalBody} from './styles';

const ModalAlert: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Container>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <Container>
          <ModalBody>
            <Text>OKA</Text>
          </ModalBody>
        </Container>
      </Modal>
    </Container>
  );
};

export default ModalAlert;

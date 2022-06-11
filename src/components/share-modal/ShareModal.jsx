import { Modal, Button, Group } from '@mantine/core';
import PostShare from '../post-share/PostShare';

function ShareModal({opened , setOpened}) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="55%"
      >
        <PostShare />
        </Modal>

    </>
    );
}

export default ShareModal;

import React from 'react'
import { Box, Modal } from '@mui/material'
import YouTube from 'react-youtube';

const VideoModal = ({ video, open, handleClose }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        maxWidth: "100%",
        bgcolor: "gray",
        boxShadow: 24,
    };

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <YouTube videoId={video?.key} opts={opts} />
            </Box>
        </Modal>
    )
}

export default VideoModal
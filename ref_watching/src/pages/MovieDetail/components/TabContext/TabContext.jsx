import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'
import ReviewList from '../ReviewList/ReviewList';
import MovieCardList from '../../../../common/MovieCardList/MovieCardList';
import { useRecommendationQuery } from '../../../../hooks/useRecommendations';



function a11yProps(label) {
    return {
        id: `tab-${label}`,
        'aria-controls': `tabpanel-${label}`,
    };
}

const TabContext = ({ id }) => {
    const [value, setValue] = useState("review");
    const [recommendationPage, setRecommendationPage] = useState(1);

    const {
        data: recommendationData, 
        isLoading: isRecommendationLoading,
        isError: isRecommendationError,
        error: recommendationError
    } = useRecommendationQuery({id, recommendationPage})

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    }
    const handleRecommendPageChange = (event, value) => {
        setRecommendationPage(value);
    }

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleTabChange}
                    textColor="inherit"
                    aria-label="related information"
                    sx={{
                        "& .MuiTabs-indicator" : {
                            backgroundColor: "warning.dark"
                        }
                    }}
                >
                    <Tab value="review" label="Reviews" {...a11yProps("review")} />
                    <Tab value="recommendation" label="You might like" {...a11yProps("recommendation")}/>
                </Tabs>
            </Box>
            <div role="tabpanel" hidden={value!=="review"}>
                <ReviewList id={id}/>
            </div>
            <div role="tabpanel" hidden={value!=="recommendation"}>
                <MovieCardList 
                    data={recommendationData}
                    page={recommendationPage}
                    handlePageChange={handleRecommendPageChange}
                    isLoading={isRecommendationLoading}
                    isError={isRecommendationError}
                    error={recommendationError}
                />
            </div>
        </Box>
    )
}

export default TabContext

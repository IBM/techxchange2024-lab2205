import React from 'react';
import ThemeFeedbackDialog from 'gatsby-theme-carbon/src/components/FeedbackDialog/FeedbackDialog';

const FeedbackDialog = ({ props }) => {
  const onSubmit = (data) => {
    console.log({ ...data });
  };

  //return <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />;
  return null;
};

export default FeedbackDialog;

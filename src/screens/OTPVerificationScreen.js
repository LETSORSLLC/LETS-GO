import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const OTPVerificationScreen = () => {
  const [status, setStatus] = useState('Initial status');
  const [facialVerification, setFacialVerification] = useState('Not verified');

  const handleStatus = () => {
    setStatus('Status updated');
  };

  const handleFacialVerification = () => {
    setFacialVerification('Verified');
  };

  return (
    <View>
      <Text>OTP Verification Screen</Text>
      <Button title="Update Status" onPress={handleStatus} />
      <Text>{status}</Text>
      <Button title="Verify Face" onPress={handleFacialVerification} />
      <Text>{facialVerification}</Text>
    </View>
  );
};

export default OTPVerificationScreen;

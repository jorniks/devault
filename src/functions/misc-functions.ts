import { errorCode } from "@/lib/metamask-error-codes";

export const truncateValue = (valueToTruncate: any, decimalPlaces: number) => {
  const truncated =
    Math.trunc(valueToTruncate * Math.pow(10, decimalPlaces)) /
    Math.pow(10, decimalPlaces);

  return truncated;
};

export const convertToDecimalValue = (SCValue: any, tokenDecimal: number) => {
  return SCValue / Math.pow(10, Number(tokenDecimal));
};

export const copyToClipboard = async (textToCopy: string) => {
  navigator.clipboard.writeText(textToCopy);
  return true;
};

export const extractErrorMessage = (error: any) => {
  // Check for specific contract revert error
  if (error?.data?.message) {
    return error.data.message;
  }
  
  // Check for error message in the error object
  if (error?.message) {
    // Look for the revert reason in the error message
    const match = error.message.match(/reason="([^"]+)"/);
    if (match) {
      return match[1];
    }
    
    // If the error message is in a different format
    const match2 = error.message.match(/execution reverted: (.*?)(?:\n|$)/);
    if (match2) {
      return match2[1];
    }
  }
  
  // Fallback to MetaMask error codes
  return errorCode[error?.code as keyof typeof errorCode] || error?.code || "Transaction failed";
};
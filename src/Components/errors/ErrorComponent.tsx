interface ErrorProps {
  FetchFunction?: () => void;
  message: string;
  status: string;
  tryAgain?: boolean;
}

const ErrorComponent = ({ FetchFunction, message, status, tryAgain }: ErrorProps) => {
  return (
    <div>
      <h1>{status}</h1>
      <p>{message}</p>
      {tryAgain && (
        <div>
          <button onClick={FetchFunction}>Try again</button>
        </div>
      )}
    </div>
  );
};

export default ErrorComponent;

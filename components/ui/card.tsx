import { Divider } from "./divider";

export const Card = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full bg-white flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Divider />
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={`text-lg font-bold px-5 py-5 ${className}`}>{children}</h2>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export const CardFooter = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={className}>
      <Divider />
      {children}
    </div>
  );
};

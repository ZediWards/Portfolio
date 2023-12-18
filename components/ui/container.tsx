//interface declares all the properties, along with their types.
interface ContainerProps {
  children: React.ReactNode;
}

// React.FC is the type for react functional component
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
      mx-auto 
      w-full 
      max-w-7xl"
    >
      {children}
    </div>
  );
};

export default Container;

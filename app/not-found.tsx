import Image from "next/image";

const NotFound = () => {
  return (
    <div className="notFound">
      <Image src="/images/404.jpg" width={1440} height={740} alt="404" />
    </div>
  );
};
export default NotFound;

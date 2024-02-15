

export default function DahboardLayout({
    children,
    user,
    revenue,
    notification
}) {
  return (
    <div className="">
        <div className="">{children}</div>
        <div className="flex">
            <div className="">
                <div className="">{user}</div>
                <div className="">{revenue}</div>
            </div>
            <div className="">{notification}</div>
        </div>
    </div>
  );
}

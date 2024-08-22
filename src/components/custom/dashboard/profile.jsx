export default function ProfileTile(props) {
  return (
    <div className="flex gap-2 items-center">
      <div className="h-10 w-10 relative">
        <div className="border border-red-400 rounded-full w-full h-full absolute">

        </div>
        <div className="absolute h-5 w-5 bg-green-600 rounded-full border-4 border-[#f1f1f1] right-0 bottom-0 -mb-1"></div>
      </div>
      <div className="flex flex-col leading-4">
        <h6>{props.username}</h6>
        <p className="text-xs">{props.email.length > 17 ? props.email.split('').slice(0, 17).join('') + "..." : props.email}</p>
      </div>
    </div>
  );
}

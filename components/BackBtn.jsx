import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Link from "next/link";

export default function BackBtn({ content, url,onClick }) {
  return (
    <div>
      <Link passHref href={url}>
        <div className="flex flex-row gap-4 cursor-pointer my-4 p-2 ml-16">
          <ArrowBackIosNewIcon onClick={onClick} sx={{ width: 32, height: 32 }} />
          <h2>{content}</h2>
        </div>
      </Link>
    </div>
  );
}

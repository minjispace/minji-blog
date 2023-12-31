import { SocialLoginLoading } from "@/components";
import { getAccessToken } from "@/utils/get-social-token";

async function RedirectPage(props: any) {
  const {
    params: { platform },
    searchParams: { code },
  } = props;

  // google callback page에서 getAccessToken()를 호출 => 로그인한 유저 token get
  const result = await getAccessToken(code, platform);

  return (
    <div>
      {/* props socialLogin에 넘겨주기 */}
      <SocialLoginLoading result={result} />
    </div>
  );
}

export default RedirectPage;

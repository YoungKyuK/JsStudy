import { useState, useEffect } from "react";

export default function usePromise(promiseCreator, deps) {
  // 대기 중/완료/실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  // 절대 잊지 말아야 할 유의 사항은 useEffect에 등록하는 함수는 async로 작성하면 안 된다는 점입니다.
  // 그 대신 함수 내부에 async 함수를 따로 만들어 주어야 합니다.
  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [loading, resolved, error];
}

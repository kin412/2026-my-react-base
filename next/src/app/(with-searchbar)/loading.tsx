// /search 로 접속했을 시 이 loading.tsx을 만들어 주는 것만으로 스트리밍 설정이 끝남.
// 이제 /search/page.tsx가 렌더링이 다되기 전까지는 loading.tsx가 대신 보여지게됨.
// 해당경로 아래의 모든 비동기 컴포넌트에 뜨게됨.
// 왜냐하면 비동기 컴포넌트가 아니라면 데이터를 불러오는게 아니라는 거니까
// loading.tsx는 page 컴포넌트에만 스트리밍을 적용할수 있음.
// 쿼리스트링이 변경되었을땐 적용되지 않음. ex) 처음 index에서 search를 실행하면 loading이 뜨지만,
// 한번 search한 이후 또 search하면 loading이 뜨지 않음.
export default function Loading() {
  return <div>Loading...</div>;
}

# NextJS iOS flexbox vh100 issue

## goal

- 일반적으로 가운데가 스크롤 되는 flexbox를 구현할 때 가장 겉에 컨테이너에 100vh를 사용하게 된다.
- iOS 사파리의 경우 주소표시줄이 나타나거나 사라질 때 height가 달라지기 때문에 위가 가려지던가, 아래가 가려지던가 한다.
- window.onresize 함수를 이용해서 최대한 UI가 깨지지 않도록 한다.

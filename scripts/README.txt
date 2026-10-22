정적 본문 생성 및 검증

최초 1회: npm ci
본문을 수정한 뒤: npm run build
배포 전 확인: npm run check:static 및 npm test

Node.js 18 이상이 필요합니다. jsdom은 개발/생성용으로만 사용하며,
방문자의 브라우저나 배포 서버에 Node.js를 설치할 필요는 없습니다.
현재 GitHub Pages처럼 생성된 HTML/CSS/JS 파일을 그대로 제공할 수 있습니다.

61개 페이지의 본문 원본은 기존 pages/*.js의 데이터와 템플릿입니다.
41개 질환의 FAQ 원본은 content/condition-faqs.json입니다. FAQ를 수정한
뒤에도 npm run build를 실행하세요. 빌드할 때 각 페이지의 FAQ만 HTML에
넣으며 전체 FAQ 데이터를 방문자의 브라우저에서 불러오지 않습니다.
참고자료는 별도 내부 검토 문서에 유지하며 페이지에는 표시하지 않습니다.
data-prerendered="true"인 HTML 본문을 직접 고치지 말고, 해당 JS의
내용을 수정한 후 다시 생성하세요. 빌드는 기존 스타일과 모션 코드를
수정하지 않습니다. 스크립트 실행 시에는 생성된 본문을 다시 덮어쓰지
않고 기존 이벤트와 애니메이션을 연결합니다.

실제 픽셀 배치나 애니메이션 프레임은 별도 브라우저 확인이 필요합니다.

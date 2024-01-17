const { exec } = require('child_process');

// 실행할 파이썬 스크립트
const pythonScript = 'SummaryAPI.py';
// 파이썬 스크립트에 전달할 인자
const arguments = ['인자1', '인자2'];

// 파이썬 코드 실행
const child = exec(`python ${pythonScript} ${arguments.join(' ')}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`실행 중 오류 발생: ${error}`);
    return;
  }
  console.log(`표준 출력: ${stdout}`);
  console.error(`표준 에러 출력: ${stderr}`);
});

// 파이썬 코드 실행이 완료되면 이벤트 처리
child.on('close', (code) => {
  console.log(`파이썬 코드 실행 종료, 종료 코드: ${code}`);
});

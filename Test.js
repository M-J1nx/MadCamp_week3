const { exec } = require('child_process');

// ������ ���̽� ��ũ��Ʈ
const pythonScript = 'SummaryAPI.py';
// ���̽� ��ũ��Ʈ�� ������ ����
const arguments = ['����1', '����2'];

// ���̽� �ڵ� ����
const child = exec(`python ${pythonScript} ${arguments.join(' ')}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`���� �� ���� �߻�: ${error}`);
    return;
  }
  console.log(`ǥ�� ���: ${stdout}`);
  console.error(`ǥ�� ���� ���: ${stderr}`);
});

// ���̽� �ڵ� ������ �Ϸ�Ǹ� �̺�Ʈ ó��
child.on('close', (code) => {
  console.log(`���̽� �ڵ� ���� ����, ���� �ڵ�: ${code}`);
});

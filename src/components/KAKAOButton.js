import './Memo.css';

const KAKAOButton = (props) => {
    const createKAKAOButton = () => {
        if(window.Kakao) {
            
            const kakao = window.Kakao
            
        
            kakao.init('850bb87b5f79c756c5200773fbff9071')
        
            kakao.Share.createDefaultButton({
                // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
                container: '#kakao-link-btn',
                objectType: 'text',
                text:
                    props.txt,
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com',
                },
            })

        }
        
    }

    return (
        <div>
            <button className='Kakaobtn' id="kakao-link-btn" onClick={createKAKAOButton}>
                카카오톡으로 공유하기
            </button>
        </div>
    )

}

export default KAKAOButton;
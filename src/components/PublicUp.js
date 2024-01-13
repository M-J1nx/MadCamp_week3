import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function PublicUp() {
    const history = useNavigate();
    const {user, logout} = useAuth;
    console.log(user);
    return (
      <div>
        
        {user ? (
            <button>로그아웃</button>
          
        ) : (
          <button onClick={() => { window.location.href = "/login" }}>
            로그인
          </button>
        )}
      </div>
    );
  }

export default PublicUp;
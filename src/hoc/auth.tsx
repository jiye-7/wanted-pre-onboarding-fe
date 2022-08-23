import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
	SpecificComponent: JSX.Element;
	option: boolean | null;
}

/**
 * SpecificComponent: 보여줄 Component
 * option: 접근 가능 여부
 *  - true: 로그인 된 상태에서 접근 가능한 경우
 *  - false: 로그인이 되지 않은 상태에서 접근 가능한 경우
 *  - null: 로그인 여부에 관계없이 접근 가능한 경우
 */
const Auth = ({ SpecificComponent, option }: IProps) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		// 로그인이 되었을 때
		//  - 접근 불가능한 경우: option이 false 일 때
		//  - 접근 가능한 경우: option이 true / null 일 때

		// 로그인 되지 않았을 때
		//  - 접근 불가능한 경우: option이 true 일 때
		//  - 접근 가능한 경우: options이 false / null 일 때

		if (localStorage.getItem('userToken')) {
			// 로그인 되어있고, 로그인 안 되어 있으면 접근 불가
			if (option === false) {
				navigate('/todo');
			}
		} else if (!localStorage.getItem('userToken')) {
			if (option === true) {
				navigate('/signin');
			}
		}
		setIsLoading(false);
	}, [navigate, option]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return SpecificComponent;
};

export default Auth;

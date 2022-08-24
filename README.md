### My TodoList Project

#### 프로젝트 실행화면 gif

#####

<details>
<summary>SignUp후 login을 따로 하지 않아도 localStorage에 token저장, token을 가져와 auth 처리</summary>

https://user-images.githubusercontent.com/62678492/186390651-5d6df67b-6720-4b32-ac2c-c22930cc9606.mov

<br/>
</details>

<details>
<summary>todo 추가, 완료/미완료 여부 체크 기능, 수정 및 삭제 기능</summary>

https://user-images.githubusercontent.com/62678492/186390671-f217bf68-823b-4b76-a38e-35892992b2cc.mov

<br/>
</details>
<br/>

<br/>

#### 프로젝트 실행 방법

```
npm install
npm start
```

<br/>

#### 사용 스택 목록

> react, typescript, redux, styled-components

<br/>

#### 프로젝트 설명

> 로그인/회원가입 기능
> 이메일, 비밀번호 유효성 검증
> 로그인 성공시 todo들을 보여주기
> auth 기능

<br/>

### 구현한 기능 목록(Software Requirement Specification)

#### 로그인/회원가입

> / 경로에 로그인, 회원가입 기능을 개발
>
> - page 구성: 이메일 입력창, 비밀번호 입력창, 제출 버튼

<h4>Assignment 1_이메일과 비밀번호의 유효성 검사기능을 구현 </h4>
<details>
<summary>이메일, 비밀번호 유효성 검사 기능 구현</summary>
&nbsp;&nbsp;&nbsp; 1. 이메일 조건: @ 포함  <br/>
&nbsp;&nbsp;&nbsp; 2. 비밀번호 조건: 8자 이상  <br/>
&nbsp;&nbsp;&nbsp; 3. 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 처리  <br/>
&nbsp;&nbsp;&nbsp; 4. 보안 상 실제 사용하는 이메일과 패스워드 제외, 테스트용 이메일, 패스워드 사용  <br/>
</details>
<br/>

<h4>Assignment 2_로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동 </h4>
<details>
<summary>로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동</summary>
&nbsp;&nbsp;&nbsp; 1. 이메일 조건: @ 포함  <br/>
&nbsp;&nbsp;&nbsp; 2. 비밀번호 조건: 8자 이상  <br/>
&nbsp;&nbsp;&nbsp; 3. 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 처리  <br/>
&nbsp;&nbsp;&nbsp; 4. 보안 상 실제 사용하는 이메일과 패스워드 제외, 테스트용 이메일, 패스워드 사용  <br/>
</details>
<br/>

<h4>Assignment 3_로그인 여부에 따른 리다이렉트 처리를 구현 </h4>
<details>
<summary>로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동</summary>
&nbsp;&nbsp;&nbsp; 1. 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트  <br/>
&nbsp;&nbsp;&nbsp; 2. 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트  <br/>
</details>
<br/>

#### 투두 리스트

<h4>Assignment 4_todo list </h4>
<details>
<summary>투두 리스트 페이지</summary>
&nbsp;&nbsp;&nbsp; 1. /todo 경로에 접속하면 투두 리스트의 목록을 볼 수 있다.  <br/>
&nbsp;&nbsp;&nbsp; 2. 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시된다.  <br/>
&nbsp;&nbsp;&nbsp; 3. 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가된다. <br/>
</details>
<br/>

<h4>Assignment 5_todo list: update, delete </h4>
<details>
<summary>투두 리스트의 수정, 삭제 기능을 구현</summary>
&nbsp;&nbsp;&nbsp; 1. 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있다. <br/>
&nbsp;&nbsp;&nbsp; 2. 수정 모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있다.  <br/>
&nbsp;&nbsp;&nbsp; 3. 투두 리스트의 개별 아이템 우측에 삭제 버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제된다.  <br/>
</details>
<br/>

#### 구현하면서 어려웠던 점

<details>
<summary>auth check 구현 방법</summary>
&nbsp; 1. 각 컴포넌트들들과 접근 여부에 대한 로직을 고민<br/>
&nbsp; 2. 접근 옵션으로는 3가지 경우를 생각하였습니다. <br/>
&nbsp; 3. 보여줄 Component를 받아오고 <br/>
&nbsp; 4. option 접근 가능 여부를 조건으로 판별하였습니다. <br/>
&nbsp;&nbsp; 4-1. true: 로그인 된 상태에서 접근 가능한 경우 <br/>
&nbsp;&nbsp; 4-2. false: 로그인이 되지 않은 상태에서 접근 가능한 경우 <br/>
&nbsp;&nbsp; 4-3. null: 로그인 여부에 관계없이 접근 가능한 경우 <br/>
</details>
<details>
<summary>구현하면서 어려웠던 점</summary>
&nbsp; option을 판별하는 부분에서 login 여부에 초점을 맞추다 보니 로직을 짤 때 어려웠던 것 같습니다. <br/>

</details>

<br/>

#### 기억에 남는 에러, 잊지 말기

<details>
<summary>에러 발생</summary>
&nbsp; axios.post/axios.put 등으로 서버에 요청을 보낼 때 요청 메소드 명령어의 순서가 중요한데, data와 headers를 순서를 지키지 않아 해결하느라 많은 시간을 소비했다.  <br/>
과제를 진행하면서 너무나도 많은 오류들을 만났지만, 그중 정말 기억해야 되고 꼭 공식문서를 바로 봐야겠다는 것을 느꼈다. <br/>
<br/>
에러 발생 코드 
<br/>

```javascript
export const updateToDoAPI = (data: IRequestTodo) => {
	return axios
		.put(`${SERVER_API}${TODO_SERVER}/${data.id}`, {
			headers: {
				...headers,
				'Content-Type': 'application/json',
			},
			data,
		})
		.then((res: AxiosResponse<IResponseTodo>) => res);
};
```

<br/>
</details>
<details>
<summary>해결 코드</summary>
axios.put(url[, data[, config]]) -> 순서가 중요하다.

````javascript
export const updateToDoAPI = (data: IRequestTodo) => {
	return axios
		.put(`${SERVER_API}${TODO_SERVER}/${data.id}`, data, {
			headers: {
				...headers,
				'Content-Type': 'application/json',
			},

		})
		.then((res: AxiosResponse<IResponseTodo>) => res);
};
``` <br/>

</details>

<br/>
````

# Node 18 사용 (Alpine 기반)
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 현재 디렉토리(Logit_FE)에 있는 package.json과 yarn.lock 복사
COPY package.json yarn.lock ./

# 의존성 설치
RUN yarn install

# 프로젝트 전체 복사
COPY . .

# 개발 서버 실행
CMD ["yarn", "dev"]

<template>
  <div id="footer">
    <div class="footer_inner">
        <div class="footer_left">
            <div class="footer_logo">
                <a href="/skin-skin11/index.html"><img src="/images/icon/logo.png"></a>
            </div>
            <ul>
            	<li><a href="/skin-skin11/member/privacy.html"><b>개인정보처리방침</b></a></li>
                <li><a href="/skin-skin11/member/agreement.html">이용약관</a></li>
                <li><a href="#none">이메일 무단수집거부</a></li>
                <li><a href="#none"><img src="https://ecudemo361267.cafe24.com/web/upload/kment/images/icon/footer_sns.png"></a></li>
            </ul>
        </div>

        <div>
            <p>사단법인 유럽 한인경제인단체 총연합회<span style="display:inline-block; margin-left:4px;">The Federation of Korea Business Association of Europe</span></p>
            <div class="flex_container" style="align-items:center; gap:50px;">
                <p style="color:#666;">서울시 중구 세종대로 93 광학빌딩 1001호</p>
                <p style="color:#666;"><img src="https://ecudemo361267.cafe24.com/web/upload/kment/images/icon/footer_tel.png">070-88859-3444</p>
                <p style="color:#666;"><img src="https://ecudemo361267.cafe24.com/web/upload/kment/images/icon/footer_email.png">minguam@naver.com</p>
            </div>
        </div>

        <p class="copyright">COPYRIGHT ⓒ KMENT Corp ALL RIGHTS RESERVED.</p>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex_container {
  display: flex;
}

#footer {
  background: #fff;
  border-top: 1px solid #eaeaea;
  width: 100%;
  padding: 45px var(--section-padding) 60px;
  letter-spacing: -0.2px;
  font-weight: 400;
  position: relative;

  .footer_logo {
    max-width: 210px;

    img {
      width: 210px;
      margin-top: 10px;
    }
  }

  .footer_inner {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    box-sizing: border-box;

    .footer_li {
      display: flex;
      margin-top: 30px;

      > li > a {
        margin-right: 20px;
        color: #797979;
        position: relative;
        text-decoration: underline;

        &::after {
          display: block;
          content: '';
          width: 1px;
          height: 12px;
          position: absolute;
          right: -10px;
          top: 4px;
          background: #797979;
        }
      }
      > li:last-child > a {
        margin-right: 0;

        &::after {
          display: none;
        }
      }
    }

    .footer_left {
      display: flex;
      gap: 80px;

      > ul {
        display: flex;
        align-items: center;
        gap: 60px;
        font-size: 16px;
      }
    }

    .contact_us {
      float: right;
      text-align: left;
      margin-top: 5px;

      p {
        margin-top: 0;
      }
    }

    > div {
      h3 {
        font-size: 17px;
        color: #232323;
        font-weight: 600;
        margin-bottom: 4px;
      }

      h5 {
        font-size: 30px;
        color: #797979;
        margin-top: 10px;
      }

      p {
        font-size: 16px;
        color: #191919;
        line-height: 1.8;
        margin-top: 20px;
        width: auto;
        display: flex;
        align-items: center;

        > img {
          margin-right: 10px;
        }

        > span {
          font-size: 14px;
          color: #666;
        }

        > b {
          font-size: 16px;
          font-weight: 700;
          padding-bottom: 5px;
          display: block;
        }

        a {
          color: #fff;
          display: inline-block;
        }
      }
    }

    p.copyright {
      font-size: 16px;
      color: #191919;
      margin-top: 20px;
    }

    .right_box {
      display: flex;
      align-items: flex-start;

      > div {
        margin-left: 80px;

        p {
          margin-top: 0;
        }

        ul li {
          line-height: 2;

          a {
            color: #797979;
            font-size: 15px;
          }
        }

        &.about ul li:hover,
        &.features ul li:hover {
          text-decoration: underline;
        }

        &.sns > ul {
          display: flex;
          margin-top: 20px;

          > li {
            margin-right: 20px;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}

/* --- 💻 모바일 반응형 미디어 쿼리 📱 --- */
@media (max-width: 1024px) {
  #footer {
    min-width: auto;
    padding: 40px 0;

    .footer_inner {
      flex-direction: column;
      align-items: center;
      gap: 30px;

      .footer_left {
        flex-direction: column;
        align-items: center;
        gap: 30px;

        > ul {
          flex-direction: column;
          gap: 10px;
          justify-content: center;
        }
      }

      > div:not(.footer_left) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        > p:first-child {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
      }

      .flex_container {
        flex-direction: column;
        gap: 10px !important;
      }

      p.copyright {
        text-align: center;
      }
    }
  }
}
</style>

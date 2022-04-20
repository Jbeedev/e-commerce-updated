const AppDev = () => {
  return (
    <div>
      <div>
        <div class="aj-slide ">
          <div class="caro-print homepage-slide">
            <img src={StoreImg} alt="web development company near me" />

            <div class="print-banner-section">
              <div class="col-md-12 col-sm-12">
                <h6 class="print-p1">
                  discover the fastest, <br /> most effective way <br /> to get
                  experts for your needs{" "}
                </h6>
                <div class="print-banner-buttons">
                  <a
                    href="order"
                    class="print-request hvr-bounce-to-right  mr-3"
                  >
                    REQUEST A QUOTE
                  </a>
                  <a href="contact" class="print-contact hvr-bounce-to-right  ">
                    LET'S TALK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AllServices />
        <WhyChooseUs />
        <Testimonial />
        <TalkToUs />
      </div>
    </div>
  );
};

export default AppDev;

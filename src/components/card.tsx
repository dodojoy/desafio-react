import Image from "./image";
import "../global.css";
import Paragraph from "./paragraph";
import Title from "./title";
import Content from "./content";

export default function Card() {
  return (
    <div className="w-64 h-[28rem] bg-[var(--color-card-bg)] p-4 rounded-lg">
      <div className="w-10/13 flex flex-col">
        <Image
          src="images/image-equilibrium.jpg"
          alt="Cubo"
          className="w-10/13 h-4/6 rounded-lg"
        />
        <Title className="text-[var(--color-white)] mt-4">
          Equilibrium #3429
        </Title>
        <Paragraph className="text-[var(--color-font)] mt-4 text-xs w-full text-justify">
          Our Equilibrium collection promotes balance and calm
        </Paragraph>
        <div className="flex justify-between items-center mt-5">
          <Content
            src="images/icon-ethereum.svg"
            alt="Símbolo da moeda"
            divClassName="flex justify-between items-center gap-1.5"
            imageClassName="w-3 h-3"
            paragraphClassName="text-[var(--color-cyan)] text-[0.7rem] w-full"
            children="0.041ETH"
          />
          <Content
            src="images/icon-clock.svg"
            alt="Símbolo do relógio"
            divClassName="flex justify-between items-center gap-1.5"
            imageClassName="w-3 h-3"
            paragraphClassName="text-[var(--color-font)] text-[0.7rem] w-full"
            children="3 days left"
          />
        </div>
        <div className="w-full h-[1px] bg-[var(--color-line)] my-4"></div>
        <Content
          src="images/image-avatar.png"
          alt="Imagem do avatar"
          divClassName="flex justify-between items-center gap-3"
          imageClassName="w-6 h-6 border-[0.5px] border-[var(--color-white)] border-solid rounded-full "
          paragraphClassName="text-[var(--color-font)] text-[0.7rem] w-full"
          children="Creation of Jules Wyvern"
        />
      </div>
    </div>
  );
}

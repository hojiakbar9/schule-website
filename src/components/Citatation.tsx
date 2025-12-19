interface Props {
  ayah: string;
  translation: string;
  reference: string;
}
const Citatation = ({ ayah, translation, reference }: Props) => {
  return (
    <div className="mt-20 text-center">
      <div className="inline-block p-8 border-y-2 border-accent/20 max-w-4xl mx-auto">
        <p className="font-arabic text-3xl md:text-4xl text-primary mb-4 leading-loose">
          {ayah}
        </p>
        <p className="text-lg text-secondary italic">{translation}</p>
        <p className="text-sm text-accent font-accent font-medium mt-2 tracking-widest uppercase">
          {reference}
        </p>
      </div>
    </div>
  );
};

export default Citatation;

type DynamicRenderType<T> = {
  data: T[];
  renderItem: (item: T) => JSX.Element | void;
};

const DynamicRender = <T,>({ data, renderItem }: DynamicRenderType<T>) => {
  if (!data || !Array.isArray(data)) return null;

  return <>{data.map((item: T) => renderItem(item))}</>;
};

export default DynamicRender;

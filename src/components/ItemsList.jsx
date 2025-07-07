import Items from './Items'
export default function ItemsList({ items }) {
  return (
    <>
      <div className="bg-white m-12 mt-0 mb-0  p-4 flex flex-wrap justify-center gap-z">
        {items && items.map(function (item) {
          return (
            <Items
              key={item.name}
              id={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.image}
              showDetails={item.showDetails}
            />
          );
        })}
      </div>
    </>
  );
}

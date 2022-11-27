import { useEffect, useState } from 'react';
import Table, { Column } from 'react-base-table';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { IoSadOutline } from 'react-icons/io5';
import { getUsers } from '@/services/user';
import UserSkeleton from '@/components/user/user-skeleton';
import Pagination from '@/components/pagination';
import UserModal from '@/components/user/user-modal';
import usePageCount from '@/hooks/usePageCount';
import type { ApiUserResponse, User as IUser } from '@/types';
import 'react-base-table/styles.css';

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page')) ?? 0;
  const data = await getUsers({
    page,
  });
  return { data };
}

const emptyRenderer = () => (
  <span className="w-full h-full flex justify-center items-center">
    Getting data ...
  </span>
);

const User = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useLoaderData() as { data: ApiUserResponse };
  const pageCount = usePageCount({
    total: data?.total,
  });
  const navigate = useNavigate();
  const navigation = useNavigation();

  const closeModal = () => {
    setShowModal(false);
    setUser(null);
  };

  useEffect(() => {
    if (currentPage === 1) {
      navigate('/user');
    }
  }, [currentPage]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    setCurrentPage(newPage);
    navigate({
      search: `page=${newPage}`,
    });
  };

  const columns = [
    {
      title: 'Photo',
      key: 'image',
      dataKey: 'image',
      width: 150,
      align: 'center',
      headerClassName: 'text-[10px] font-bold text-gray-900',
      cellRenderer: ({ rowData }: { rowData: IUser }) => (
        <img src={rowData.image} className="w-6" />
      ),
    },
    {
      title: 'Usuario',
      key: 'username',
      dataKey: 'username',
      headerClassName: 'text-[10px] font-bold text-gray-900',
      width: 150,
    },
    {
      title: 'Nombre',
      key: 'firstName',
      dataKey: 'firstName',
      headerClassName: 'text-[10px] font-bold text-gray-900',
      width: 150,
    },
    {
      title: 'Apellido',
      key: 'lastName',
      dataKey: 'lastName',
      headerClassName: 'text-[10px] font-bold text-gray-900',
      width: 150,
    },
    {
      title: 'Edad',
      key: 'age',
      dataKey: 'age',
      headerClassName: 'text-[10px] font-bold text-gray-900',
      width: 80,
    },
    {
      title: 'IP',
      key: 'ip',
      dataKey: 'ip',
      headerClassName: 'text-[10px] font-bold text-gray-900',
      width: 250,
    },
  ];

  return (
    <>
      <div className="max-w-2xl mx-auto my-8">
        {navigation.state === 'loading' ? (
          <UserSkeleton />
        ) : data.users.length ? (
          <>
            <Table
              data={data.users}
              width={720}
              height={400}
              emptyRenderer={emptyRenderer}
              rowEventHandlers={{
                onClick: ({ rowData }) => {
                  setUser(rowData);
                  setShowModal(true);
                },
              }}
              className="cursor-pointer"
            >
              {columns.map((column) => (
                <Column
                  title={column.title}
                  key={column.key}
                  dataKey={column.dataKey}
                  width={column.width}
                  headerClassName={column.headerClassName}
                  cellRenderer={column?.cellRenderer && column.cellRenderer}
                />
              ))}
            </Table>
            <div className="py-8 mt-8 flex justify-center">
              <Pagination
                pageCount={pageCount}
                page={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <h3 className="text-2xl flex place-items-center gap-2">
              Sorry! <IoSadOutline size="1.2em" />
            </h3>
            <p className="flex items-center gap-2">
              There is not users to show.
            </p>
          </div>
        )}
      </div>
      {user && (
        <UserModal user={user} active={showModal} onClose={closeModal} />
      )}
    </>
  );
};

export default User;
